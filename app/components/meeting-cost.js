import Ember from 'ember';

export default Ember.Component.extend({
	meetingCost : Ember.computed('participants.@each.numOf',function() {
		var runningCost = 0;
		console.log(this.get('participants.length'));

		for (var i = 0; i < this.get('participants.length'); i++) {
			var participant = this.get('participants').objectAt(i);
			var numberOf = participant.get('numOf');
			var perMin = participant.get('perMinute')
			runningCost = runningCost + (numberOf * perMin);
		}

		var formatted = parseFloat(runningCost, 10).toFixed(2);
		return '$' + formatted;
	})
});
