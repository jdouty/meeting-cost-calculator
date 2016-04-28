import Ember from 'ember';

export default Ember.Component.extend({
	store: Ember.inject.service('store'),
	totalMeetingCost : Ember.computed('participants.@each.numOf', 'participants.[1].time.content.time',function() {
		var runningCost = 0;

		for (var i = 0; i < this.get('participants.length'); i++) {
			var currentTime = this.get('store').peekAll('time').objectAt(0).get('time');
			//var currentTime = this.get('participants').objectAt(i).get('time');

			var participant = this.get('participants').objectAt(i);
			var numberOf = participant.get('numOf');
			var perMin = participant.get('perMinute')
			runningCost = runningCost + ((numberOf * perMin) * currentTime);
		}

		var formatted = parseFloat(runningCost, 10).toFixed(2);
		return '$' + formatted;
	})
});
