import Ember from 'ember';

var default_data = [{
  id: 1,
  type: 'participant',
  attributes: {
    title: 'Number of DEVs',
    perYear: 100000,
    perHour: 48.08,
    perMinute: 0.80,
    numOf: 0
  },
  relationships: {}
  }, {
  id: 2,
  type: 'participant',
  attributes: {
    title: 'Number of QAs',
    perYear: 82000,
    perHour: 39.42,
    perMinute: 0.66,
    numOf: 0
  },
  relationships: {}
  }, {
  id: 3,
  type: 'participant',
  attributes: {
    title: 'Number of BAs',
    perYear: 75000,
    perHour: 36.06,
    perMinute: 0.60,
    numOf: 0
  },
  relationships: {}
  }, {
  id: 1,
  type: 'time',
  attributes: {
    time: 15
  },
  relationships: {}
}];

export default Ember.Route.extend({
  model() {
    this.store.push({
      data: default_data
    });

    return this.store.peekAll('participant');
  }
});