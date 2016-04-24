import Model from 'ember-data/model';
import DS from 'ember-data';

export default Model.extend({
  title: DS.attr('string'),
  perYear: DS.attr('number'),
  perHour: DS.attr('number'),
  perMinute: DS.attr('number'),
  numOf: DS.attr('number')
});
