import Model from 'ember-data/model';
import DS from 'ember-data';

export default Model.extend({
	time: DS.attr('number'),
	participants: DS.hasMany('participants')
});
