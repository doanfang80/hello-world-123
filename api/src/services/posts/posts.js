'use strict'
var _Object$defineProperty = require('@babel/runtime-corejs3/core-js/object/define-property')
_Object$defineProperty(exports, '__esModule', { value: true })
exports.deletePost = exports.updatePost = exports.createPost = exports.post = exports.posts = void 0

var _db = require('../../lib/db')

const posts = () => {
  return _db.db.post.findMany()
}
exports.posts = posts

const post = ({ id }) => {
  return _db.db.post.findOne({
    where: { id },
  })
}
exports.post = post

const createPost = ({ input }) => {
  return _db.db.post.create({
    data: input,
  })
}
exports.createPost = createPost

const updatePost = ({ id, input }) => {
  return _db.db.post.update({
    data: input,
    where: { id },
  })
}
exports.updatePost = updatePost

const deletePost = ({ id }) => {
  return _db.db.post.delete({
    where: { id },
  })
}
exports.deletePost = deletePost
