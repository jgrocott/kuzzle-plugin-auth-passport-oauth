const
  should = require('should'),
  PluginOAuth = require('../lib'),
  sandbox = require('sinon').sandbox.create();

describe('#exists', () => {
  let pluginOauth;

  beforeEach(() => {
    sandbox.reset();
    pluginOauth = new PluginOAuth();
    pluginOauth.getProviderRepository = sandbox.stub();
  });

  it('should resolve true if user exists', () => {
    pluginOauth.getCredentialsFromKuid = sandbox.stub().returns(Promise.resolve({_id: '42'}));
    return should(pluginOauth.exists()).be.fulfilledWith(true);
  });

  it('should resolve false if user doesn\'t exists', () => {
    pluginOauth.getCredentialsFromKuid = sandbox.stub().returns(Promise.resolve(null));
    return should(pluginOauth.exists()).be.fulfilledWith(false);
  });
});