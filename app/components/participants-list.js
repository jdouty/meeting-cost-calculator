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
	}
});
