import Ember from 'ember';

var participants = [{
  title: 'Developer',
  perYear: 100000,
  perHour: 48.08,
  perMinute: 0.80
}, {
  title: 'Quality Assurance',
  perYear: 82000,
  perHour: 39.42,
  perMinute: 0.66
}, {
  title: 'Business Analyst',
  perYear: 75000,
  perHour: 36.06,
  perMinute: 0.60
}];

export default Ember.Route.extend({
	model() {
		return participants;
	}
});
