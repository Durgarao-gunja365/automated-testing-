// Mock for three.js
export default {
  WebGLRenderer: function() {
    return {
      domElement: document.createElement('canvas'),
      setSize: () => {},
      render: () => {},
      setClearColor: () => {},
    }
  },
  Scene: function() {},
  PerspectiveCamera: function() {
    return {
      position: { set: () => {} },
      lookAt: () => {},
    }
  },
  BoxGeometry: function() {},
  MeshBasicMaterial: function() {},
  Mesh: function() {},
  AmbientLight: function() {},
  PointLight: function() {},
}