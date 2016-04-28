import Ember from 'ember';

export default Ember.Component.extend({
	store: Ember.inject.service('store'),
  	selectedTime: null,
  	times: Ember.String.w('15 30 60 90 120 150 180'),
  	actions: {
    	selectTime(selectedTime) {
    		this.set('selectedTime', selectedTime);

    		// Get the stored value for time and set it to the current time
    		this.get('store').peekAll('time').objectAt(0).set('time', this.get('selectedTime'));
    	}
  	}
});