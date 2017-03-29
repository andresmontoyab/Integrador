define(["Test", "Tone/source/Source", "Tone/core/Transport", "helper/Offline2"], 
function (Test, Source, Transport, OfflineTest) {

	describe("Source", function(){

		it("can be created and disposed", function(){
			var source = new Source();
			source.dispose();
			Test.wasDisposed(source);
		});

		it("can be started and stopped", function(){
			var source = new Source();
			source.start(0);
			source.stop(1);
			source.dispose();
		});

		it("can be constructed with an options object", function(){
			var source = new Source({
				"volume" : -20,
			});
			expect(source.volume.value).to.be.closeTo(-20, 0.1);
			source.dispose();
		});

		it("can be muted in the constructor options", function(){
			var source = new Source({
				"mute" : true
			});
			expect(source.mute).to.be.true;
			source.dispose();
		});

		it("can set the volume", function(){
			var source = new Source();
			source.volume.value = -8;
			expect(source.volume.value).to.be.closeTo(-8, 0.1);
			source.dispose();
		});

		it("can mute and unmute the source", function(){
			var source = new Source();
			source.volume.value = -8;
			source.mute = true;
			expect(source.mute).to.be.true;
			expect(source.volume.value).to.equal(-Infinity);
			source.mute = false;
			//returns the volume to what it was
			expect(source.volume.value).to.be.closeTo(-8, 0.1);
			source.dispose();
		});

		it("can get and set values with an object", function(){
			var source = new Source();
			source.set("volume", -10);
			expect(source.get().volume).to.be.closeTo(-10, 0.1);
			source.dispose();
		});

		it("is initally stopped", function(){
			var source = new Source();
			expect(source.state).to.equal("stopped");
			source.dispose();
		});

		it("cannot be scheduled to stop/start twice in a row", function(){
			var source = new Source();
			source.start(0).start(1);
			source.stop(2).stop(3);
			source.dispose();
		});

		it("has an output", function(){
			var source = new Source();
			source.connect(Test);
			source.dispose();
		});

		it("can be scheduled with multiple starts/stops", function(){
			var source = new Source();
			source.start(0).stop(0.5).start(0.75).stop(1).start(1.25).stop(1.5);
			expect(source._state.getStateAtTime(0)).to.equal("started");
			expect(source._state.getStateAtTime(0.5)).to.equal("stopped");
			expect(source._state.getStateAtTime(0.8)).to.equal("started");
			expect(source._state.getStateAtTime(1)).to.equal("stopped");
			expect(source._state.getStateAtTime(1.25)).to.equal("started");
			expect(source._state.getStateAtTime(1.6)).to.equal("stopped");
			source.dispose();
		});

		it ("can sync its start to the Transport", function(){
			var source = new Source();
			source.sync();
			Transport.start();
			expect(source.state).to.equal("started");
			source.dispose();
			Transport.stop();
		});

		it ("can sync its stop to the Transport", function(done){
			OfflineTest(function(output, testFn, tearDown){
				var source = new Source();
				source.sync();
				expect(source.state).to.equal("stopped");
				Transport.start().stop(0.4);
				expect(source.state).to.equal("started");

				testFn(function(sample, time){
					if (time > 0.4){
						expect(source.state).to.equal("stopped");
					}
				});

				tearDown(function(){
					source.dispose();
					done();
				});
			}, 0.5);
		});

		it ("can sync its start to the Transport after a delay", function(done){
			OfflineTest(function(output, testFn, tearDown){
				var source = new Source();
				source.sync(0.3);
				Transport.start(0).stop(0.4);
				expect(source.state).to.equal("stopped");

				testFn(function(sample, time){
					if (time > 0.3 && time < 0.4){
						expect(source.state).to.equal("started");
					} else if (time > 0.4){
						expect(source.state).to.equal("stopped");
					}
				});

				tearDown(function(){
					source.dispose();
					done();
				});
			}, 0.5);
		});

		it ("can unsync after it was synced", function(){
			var source = new Source();
			source.sync();
			source.unsync();
			Transport.start();
			expect(source.state).to.equal("stopped");
		});


		it ("correctly returns the scheduled play state", function(done){
			OfflineTest(function(output, testFn, tearDown){
				var source = new Source();
				expect(source.state).to.equal("stopped");
				source.start(0).stop(0.5);

				testFn(function(sample, time){
					if (time >= 0 && time < 0.5){
						expect(source.state).to.equal("started");
					} else if (time > 0.5){
						expect(source.state).to.equal("stopped");
					}
				});

				tearDown(function(){
					source.dispose();
					done();
				});
			}, 0.6);
		});
	});
});