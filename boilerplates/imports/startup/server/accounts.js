ServiceConfiguration.configurations.update(
  { service: 'github' },
  { $set: {
    clientId: '7c7418e665f9d31c4807',
    secret: '71f78121c497e4c64a70704fd4219b13ddad2e4b'
  }
  },
  { upsert: true }
);
ServiceConfiguration.configurations.update(
  { service: 'weibo' },
  { $set: {
    clientId: '7c7418e665f9d31c4807',
    secret: '71f78121c497e4c64a70704fd4219b13ddad2e4b'
  }
  },
  { upsert: true }
);
ServiceConfiguration.configurations.update(
  { service: 'wechat' },
  { $set: {
    appId: '<your-app-id>',
    secret: '<your-app-secret>',
    scope: 'basic',
  }
  },
  { upsert: true }
);
