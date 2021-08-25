var Mock = require('mockjs')
module.exports = {
  getProducts: Mock.mock({
    error: 0,
    code: 200,
    msg: 'success',
    result: {
      1: {
        title: 'iPad 4 Mini',
        price: 500.01,
        inventory: 2,
      },
      2: {
        title: 'H&M T-Shirt White',
        price: 10.99,
        inventory: 10,
      },
      3: {
        title: 'Charli XCX - Sucker CD',
        price: 19.99,
        inventory: 5,
      },
    },
  }),
  deleteProducts: Mock.mock({
    error: 0,
    msg: 'success',
    code: 204,
    result: {},
  }),
  getTopo: Mock.mock({
    error: 0,
    msg: 'success',
    code: 200,
    result: {
      id: 1,
      type: 'internet',
      name: 'hubble-test.qiyi.domain',
      url: '/api/v1/app/toponode?app=xxxx&type=dns&name=hubble-test.qiyi.domain',
      status: 'error',
      summary: '',
      children: [
        {
          id: 2,
          type: 'qlb',
          name: 'hubble-ingress',
          url: '/api/v1/app/toponode?clusterid=xxxx&app=xxxx&type=qlb&name=hubble-ingress',
          status: 'ok',
          summary: '',
          background: {
            id: 3,
            type: 'cluster',
            name: 'cnhb1-public-pro01',
            url: '/api/v1/app/toponode?clusterid=xxxx&app=xxxx&type=cluster&name=cnhb1-public-pro01',
            status: 'ok',
            summary: '',
          },
          children: [
            {
              id: 4,
              type: 'pod',
              name: 'test-001',
              url: '/api/v1/app/toponode?clusterid=xxxx&app=xxxx&type=pod&name=test-001',
              status: 'error',
              summary: '',
              background: {
                id: 5,
                type: 'node',
                name: 'phy-node',
                url: '/api/v1/app/toponode?clusterid=xxxx&app=xxxx&type=host&name=phy-node',
                status: 'ok',
                summary: '',
              },
              children: [
                {
                  id: 6,
                  type: 'container',
                  name: 'contianer-001',
                  url: '/api/v1/app/toponode?clusterid=xxxx&app=xxxx&type=container&name=container-001',
                  status: 'ok',
                  summary: '',
                },
                {
                  id: 7,
                  type: 'container',
                  name: 'contianer-002',
                  url: '/api/v1/app/toponode?clusterid=xxxx&app=xxxx&type=container&name=container-002',
                  status: 'error',
                  summary: '',
                },
                {
                  id: 8,
                  type: 'pvc',
                  name: 'pvc-xxxx',
                  url: '/api/v1/app/toponode?clusterid=xxxx&app=xxxx&type=pvc&name=pvc-xxxx',
                  status: 'ok',
                  summary: '',
                },
              ],
            },
          ],
        },
        {
          id: 20,
          type: 'qlb',
          name: 'hubble-ingress',
          url: '/api/v1/app/toponode?clusterid=xxxx&app=xxxx&type=qlb&name=hubble-ingress',
          status: 'ok',
          summary: '',
          background: {
            id: 30,
            type: 'cluster',
            name: 'cnhb1-public-pro02',
            url: '/api/v1/app/toponode?clusterid=xxxx&app=xxxx&type=cluster&name=cnhb1-public-pro01',
            status: 'ok',
            summary: '',
          },
          children: [
            {
              id: 40,
              type: 'pod',
              name: 'test-0012',
              url: '/api/v1/app/toponode?clusterid=xxxx&app=xxxx&type=pod&name=test-001',
              status: 'ok',
              summary: '',
              background: {
                id: 50,
                type: 'node',
                name: 'phy-node',
                url: '/api/v1/app/toponode?clusterid=xxxx&app=xxxx&type=host&name=phy-node',
                status: 'ok',
                summary: '',
              },
              children: [
                {
                  id: 60,
                  type: 'container',
                  name: 'contianer-0011',
                  url: '/api/v1/app/toponode?clusterid=xxxx&app=xxxx&type=container&name=container-001',
                  status: 'error',
                  summary: '',
                },
                {
                  id: 70,
                  type: 'container',
                  name: 'contianer-0023',
                  url: '/api/v1/app/toponode?clusterid=xxxx&app=xxxx&type=container&name=container-002',
                  status: 'ok',
                  summary: '',
                },
                {
                  id: 80,
                  type: 'pvc',
                  name: 'pvc-xxxx',
                  url: '/api/v1/app/toponode?clusterid=xxxx&app=xxxx&type=pvc&name=pvc-xxxx',
                  status: 'error',
                  summary: '',
                },
                {
                  id: 90,
                  type: 'container',
                  name: 'contianer-0023334453535353535353535353535',
                  url: '/api/v1/app/toponode?clusterid=xxxx&app=xxxx&type=container&name=container-002',
                  status: 'ok',
                  summary: '',
                },
              ],
            },
            {
              id: 41,
              type: 'pod',
              name: 'test-001335353535353535353535353535',
              url: '/api/v1/app/toponode?clusterid=xxxx&app=xxxx&type=pod&name=test-001',
              status: 'ok',
              summary: '',
              background: {
                id: 51,
                type: 'node',
                name: 'phy-node',
                url: '/api/v1/app/toponode?clusterid=xxxx&app=xxxx&type=host&name=phy-node',
                status: 'ok',
                summary: '',
              },
              children: [
                {
                  id: 61,
                  type: 'container',
                  name: 'contianer-0010',
                  url: '/api/v1/app/toponode?clusterid=xxxx&app=xxxx&type=container&name=container-001',
                  status: 'warning',
                  summary: '',
                },
                {
                  id: 71,
                  type: 'container',
                  name: 'contianer-0003',
                  url: '/api/v1/app/toponode?clusterid=xxxx&app=xxxx&type=container&name=container-002',
                  status: 'warning',
                  summary: '',
                },
                {
                  id: 91,
                  type: 'container',
                  name: 'contianer-0020',
                  url: '/api/v1/app/toponode?clusterid=xxxx&app=xxxx&type=container&name=container-002',
                  status: 'ok',
                  summary: '',
                },
              ],
            },
          ],
        },
      ],
    },
  }),
  getTopoNode: Mock.mock({
    error: 0,
    msg: 'success',
    code: 200,
    result: {
      name: 'xxxx',
      status: 'xxxx',
    },
  }),
}
