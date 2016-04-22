import Ember from 'ember';

export default Ember.Component.extend({
	numOf: 0,
	actions: {
		addOne() {
			this.incrementProperty('numOf');
		},
		removeOne() {
			if (this.numOf>0) {
				this.decrementProperty('numOf');
			}
		}
	},

	totalCostPerMinute : Ember.computed('numOf', function() {
		var costPerMinute = this.get('numOf') * this.get('participant').get('perMinute');
		var formatted = parseFloat(costPerMinute, 10).toFixed(2);
		return '$' + formatted;
	})
});
