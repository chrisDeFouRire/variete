/**
 * Created by js on 18/12/13.
 */

var assert = require('assert');
var should = require('should');

var variete = require('../lib/main');

describe('variete', function () {
    describe('parse()', function () {
        it('should output text as is', function () {
            variete.parse('hello world!').should.eql('hello world!');
        });
        it('should allow alternatives', function() {
            ['either','or'].should.include(variete.parse('{either|or}'));
        });
        it('should allow mixing text and alternatives', function() {
            var result = variete.parse('{either|or} always');
            ['either always','or always'].should.include(result);
        });
        it('should allow mixing text and alternatives even in prepends', function() {
            var result = variete.parse('always {either|or}');
            ['always either','always or'].should.include(result);
        });
        it('should allow multiple alternatives', function() {
            var result = variete.parse('always {alt1|alt2} {alt3|alt4}');
            result.should.match(/^always (alt1|alt2) (alt3|alt4)$/);
        });
        it('should have a working example in README.md', function() {
            var desc = variete.parse('This {amazing|extraordinary|nice} module {will help me|already helps me} when I {need|have to} vary my copy.');
            desc.should.match(/^This (amazing|extraordinary|nice) module (will help me|already helps me) when I (need|have to) vary my copy.$/);
        });
        it('shoud throw exceptions with empty text', function() {
            var result = function() {return variete.parse('');};
            result.should.throw();
        });
        it('shoud throw exceptions when using {} in your text', function() {
            var result = function() {return variete.parse('this should { not work');};
            result.should.throw();
            result = function() {return variete.parse('but this should } work');};
            result.should.not.throw();
        });
    });
});