import Ember from 'ember';

export default Ember.Component.extend({
	store: Ember.inject.service('store'),
	getMeetingLength : Ember.computed('participants.@each.time', function() {
		return this.get('participants').objectAt(0).get('time');
	}),
	totalMeetingCost : Ember.computed('participants.@each.numOf', 'getMeetingLength.content.time', function() {
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
	}),
	totalWithOpportunityCost : Ember.computed('participants.@each.numOf', 'getMeetingLength.content.time', function() {
		var runningCost = 0;

		for (var i = 0; i < this.get('participants.length'); i++) {
			var currentTime = this.get('store').peekAll('time').objectAt(0).get('time');
			//var currentTime = this.get('participants').objectAt(i).get('time');

			var participant = this.get('participants').objectAt(i);
			var numberOf = participant.get('numOf');
			var perMin = participant.get('perMinute')
			runningCost = (runningCost + ((numberOf * perMin) * currentTime));
		}

		runningCost = runningCost * 1.3;
		var formatted = parseFloat(runningCost, 10).toFixed(2);
		return '$' + formatted;
	})
});
