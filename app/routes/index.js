import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model() {
    this.get('store').findRecord('github-user', '#');  /* '#' is a shortcut for
                                                       'the current user'. */
  },
});
