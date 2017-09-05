// karma.conf.js
module.exports = function(config) {
  config.set({
    frameworks: ['openui5'],

    openui5: {
      path: 'https://sapui5.hana.ondemand.com/resources/sap-ui-core.js',
      useMockServer: true
    },

    client: {
      openui5: {
        config: {
          theme: 'sap_belize',
          resourceRoots: {
            'ui5experts.ui-testing': '/base',
            'test.unit': '/base/test/unit'
          }
        },
        mockserver: {
          config: {
            autoRespond: true
          },
          rootUri: '',
          metadataURL: '/base/webapp/localService/metadata.xml',
          mockdataSettings: {

          }
        }
      }
    }
  });
};
