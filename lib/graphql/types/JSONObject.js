"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JSONObject = void 0;

var _graphql = require("graphql");

function parseLiteral(ast, variables) {
  switch (ast.kind) {
    case _graphql.Kind.STRING:
    case _graphql.Kind.BOOLEAN:
      return ast.value;

    case _graphql.Kind.INT:
    case _graphql.Kind.FLOAT:
      return parseFloat(ast.value);

    case _graphql.Kind.OBJECT:
      {
        const value = Object.create(null);
        ast.fields.forEach(field => {
          value[field.name.value] = parseLiteral(field.value, variables);
        });
        return value;
      }

    case _graphql.Kind.LIST:
      return ast.values.map(n => parseLiteral(n, variables));

    case _graphql.Kind.NULL:
      return null;

    case _graphql.Kind.VARIABLE:
      {
        const name = ast.name.value;
        return variables ? variables[name] : undefined;
      }

    default:
      return undefined;
  }
}

const id = value => value; // https://github.com/taion/graphql-type-json/blob/master/src/index.js
// http://graphql.org/graphql-js/type/#graphqlscalartype


const JSONObject = new _graphql.GraphQLScalarType({
  name: 'JSON',
  description: 'The `JSON` scalar type represents JSON values as specified by ' + '[ECMA-404](http://www.ecma-international.org/' + 'publications/files/ECMA-ST/ECMA-404.pdf).',
  serialize: id,
  parseValue: id,
  parseLiteral
});
exports.JSONObject = JSONObject;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ncmFwaHFsL3R5cGVzL0pTT05PYmplY3QuanMiXSwibmFtZXMiOlsicGFyc2VMaXRlcmFsIiwiYXN0IiwidmFyaWFibGVzIiwia2luZCIsIktpbmQiLCJTVFJJTkciLCJCT09MRUFOIiwidmFsdWUiLCJJTlQiLCJGTE9BVCIsInBhcnNlRmxvYXQiLCJPQkpFQ1QiLCJPYmplY3QiLCJjcmVhdGUiLCJmaWVsZHMiLCJmb3JFYWNoIiwiZmllbGQiLCJuYW1lIiwiTElTVCIsInZhbHVlcyIsIm1hcCIsIm4iLCJOVUxMIiwiVkFSSUFCTEUiLCJ1bmRlZmluZWQiLCJpZCIsIkpTT05PYmplY3QiLCJHcmFwaFFMU2NhbGFyVHlwZSIsImRlc2NyaXB0aW9uIiwic2VyaWFsaXplIiwicGFyc2VWYWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBLFNBQVNBLFlBQVQsQ0FBc0JDLEdBQXRCLEVBQTJCQyxTQUEzQixFQUFzQztBQUNwQyxVQUFRRCxHQUFHLENBQUNFLElBQVo7QUFDRSxTQUFLQyxjQUFLQyxNQUFWO0FBQ0EsU0FBS0QsY0FBS0UsT0FBVjtBQUNFLGFBQU9MLEdBQUcsQ0FBQ00sS0FBWDs7QUFDRixTQUFLSCxjQUFLSSxHQUFWO0FBQ0EsU0FBS0osY0FBS0ssS0FBVjtBQUNFLGFBQU9DLFVBQVUsQ0FBQ1QsR0FBRyxDQUFDTSxLQUFMLENBQWpCOztBQUNGLFNBQUtILGNBQUtPLE1BQVY7QUFBa0I7QUFDaEIsY0FBTUosS0FBSyxHQUFHSyxNQUFNLENBQUNDLE1BQVAsQ0FBYyxJQUFkLENBQWQ7QUFDQVosUUFBQUEsR0FBRyxDQUFDYSxNQUFKLENBQVdDLE9BQVgsQ0FBbUJDLEtBQUssSUFBSTtBQUMxQlQsVUFBQUEsS0FBSyxDQUFDUyxLQUFLLENBQUNDLElBQU4sQ0FBV1YsS0FBWixDQUFMLEdBQTBCUCxZQUFZLENBQUNnQixLQUFLLENBQUNULEtBQVAsRUFBY0wsU0FBZCxDQUF0QztBQUNELFNBRkQ7QUFJQSxlQUFPSyxLQUFQO0FBQ0Q7O0FBQ0QsU0FBS0gsY0FBS2MsSUFBVjtBQUNFLGFBQU9qQixHQUFHLENBQUNrQixNQUFKLENBQVdDLEdBQVgsQ0FBZUMsQ0FBQyxJQUFJckIsWUFBWSxDQUFDcUIsQ0FBRCxFQUFJbkIsU0FBSixDQUFoQyxDQUFQOztBQUNGLFNBQUtFLGNBQUtrQixJQUFWO0FBQ0UsYUFBTyxJQUFQOztBQUNGLFNBQUtsQixjQUFLbUIsUUFBVjtBQUFvQjtBQUNsQixjQUFNTixJQUFJLEdBQUdoQixHQUFHLENBQUNnQixJQUFKLENBQVNWLEtBQXRCO0FBQ0EsZUFBT0wsU0FBUyxHQUFHQSxTQUFTLENBQUNlLElBQUQsQ0FBWixHQUFxQk8sU0FBckM7QUFDRDs7QUFDRDtBQUNFLGFBQU9BLFNBQVA7QUF4Qko7QUEwQkQ7O0FBRUQsTUFBTUMsRUFBRSxHQUFHbEIsS0FBSyxJQUFJQSxLQUFwQixDLENBRUE7QUFDQTs7O0FBQ08sTUFBTW1CLFVBQVUsR0FBRyxJQUFJQywwQkFBSixDQUFzQjtBQUM5Q1YsRUFBQUEsSUFBSSxFQUFFLE1BRHdDO0FBRTlDVyxFQUFBQSxXQUFXLEVBQ1QsbUVBQ0EsK0NBREEsR0FFQSwyQ0FMNEM7QUFNOUNDLEVBQUFBLFNBQVMsRUFBRUosRUFObUM7QUFPOUNLLEVBQUFBLFVBQVUsRUFBRUwsRUFQa0M7QUFROUN6QixFQUFBQTtBQVI4QyxDQUF0QixDQUFuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdyYXBoUUxTY2FsYXJUeXBlLCBLaW5kIH0gZnJvbSAnZ3JhcGhxbCc7XG5cbmZ1bmN0aW9uIHBhcnNlTGl0ZXJhbChhc3QsIHZhcmlhYmxlcykge1xuICBzd2l0Y2ggKGFzdC5raW5kKSB7XG4gICAgY2FzZSBLaW5kLlNUUklORzpcbiAgICBjYXNlIEtpbmQuQk9PTEVBTjpcbiAgICAgIHJldHVybiBhc3QudmFsdWU7XG4gICAgY2FzZSBLaW5kLklOVDpcbiAgICBjYXNlIEtpbmQuRkxPQVQ6XG4gICAgICByZXR1cm4gcGFyc2VGbG9hdChhc3QudmFsdWUpO1xuICAgIGNhc2UgS2luZC5PQkpFQ1Q6IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgIGFzdC5maWVsZHMuZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICAgIHZhbHVlW2ZpZWxkLm5hbWUudmFsdWVdID0gcGFyc2VMaXRlcmFsKGZpZWxkLnZhbHVlLCB2YXJpYWJsZXMpO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgY2FzZSBLaW5kLkxJU1Q6XG4gICAgICByZXR1cm4gYXN0LnZhbHVlcy5tYXAobiA9PiBwYXJzZUxpdGVyYWwobiwgdmFyaWFibGVzKSk7XG4gICAgY2FzZSBLaW5kLk5VTEw6XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICBjYXNlIEtpbmQuVkFSSUFCTEU6IHtcbiAgICAgIGNvbnN0IG5hbWUgPSBhc3QubmFtZS52YWx1ZTtcbiAgICAgIHJldHVybiB2YXJpYWJsZXMgPyB2YXJpYWJsZXNbbmFtZV0gOiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59XG5cbmNvbnN0IGlkID0gdmFsdWUgPT4gdmFsdWU7XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YWlvbi9ncmFwaHFsLXR5cGUtanNvbi9ibG9iL21hc3Rlci9zcmMvaW5kZXguanNcbi8vIGh0dHA6Ly9ncmFwaHFsLm9yZy9ncmFwaHFsLWpzL3R5cGUvI2dyYXBocWxzY2FsYXJ0eXBlXG5leHBvcnQgY29uc3QgSlNPTk9iamVjdCA9IG5ldyBHcmFwaFFMU2NhbGFyVHlwZSh7XG4gIG5hbWU6ICdKU09OJyxcbiAgZGVzY3JpcHRpb246XG4gICAgJ1RoZSBgSlNPTmAgc2NhbGFyIHR5cGUgcmVwcmVzZW50cyBKU09OIHZhbHVlcyBhcyBzcGVjaWZpZWQgYnkgJyArXG4gICAgJ1tFQ01BLTQwNF0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnLycgK1xuICAgICdwdWJsaWNhdGlvbnMvZmlsZXMvRUNNQS1TVC9FQ01BLTQwNC5wZGYpLicsXG4gIHNlcmlhbGl6ZTogaWQsXG4gIHBhcnNlVmFsdWU6IGlkLFxuICBwYXJzZUxpdGVyYWwsXG59KTtcbiJdfQ==