const request = require('supertest');
const { expect } = require('chai');

const app = require('../server');

describe('Server', function() {
    it('should return the running message for the default route', function() {
        request(app)
          .get('/')
          .expect(200)
          .end(function(error, response) {
              expect(response.text).to.contain('Sean Grey');
              expect(response.text).to.contain('John Doe');
              expect(response.text).to.contain('Janet Dane');
        });
    });
    describe('Single Student', function() {
        it('id 3 should return the Janet Dane information', function() {
            let id = 3;
            request(app)
              .get(`/${id}`)
              .expect(200)
              .end(function(error, response) {
                expect(response.text).to.contain('Janet Dane');
            });
        });
    });
});