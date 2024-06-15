import carrito from '.';


export default class Actions {
  //muestra los items del carrito

  static getAllSimple(props) {
    var data = props.state.carritoReducer.data;

    if (!data) return null;

    var arr = Object.values(data);
    if (!arr) return null;

    return arr.map((itm) => {
      return {
        key_item: itm.key,
        ...itm
      };
    });
  }

  static getByKey(key, props) {
    var data = props.state.carritoReducer.data;
    if (Object.keys(data).length <= 0) return null;
    var item;
    Object.values(data).map((obj) => {
      if (obj.key == key) {
        item = obj;
      }
    });
    return item;
  }
  static getInfo(props) {
    var data = props.state.carritoReducer.data;
    var total = 0;
    var cantidad = 0;
    Object.keys(data).map((key, index) => {
      total += data[key].precio * data[key].cantidad;
      cantidad += data[key].cantidad;
    });
    return {
      total: total,
      cantidad: cantidad
    };
  }

  static addToCard({ key, CodEsp, CodMed,CodPro, NomEsp, NomMed, NomPro, PreV01}, props) {
    var data = props.state.carritoReducer.data;
    var item = data[key];
    // if (cantidad <= 0) {
      // if (item) {
      //   delete props.state.carritoReducer.data[item.key];
      //   props.dispatch({
      //     component: 'carrito',
      //     type: 'setState'
      //   });
      //   return;
      // }
    // }

    item = {
      key, CodEsp, CodMed,CodPro, NomEsp, NomMed, NomPro, PreV01
    };

    props.state.carritoReducer.data[item.key] = item;
    props.dispatch({
      component: 'carrito',
      type: 'setState'
    });
  }
  static increment({ key, precio, tipo, limit = 1, key_evento }, props) {
    var data = props.state.carritoReducer.data;
    var item = data[key];
    if (item) {
      item.cantidad += 1;
    } else {
      item = {
        key,
        precio,
        tipo,
        cantidad: 1,
        key_evento
      };
    }

    if (!limit) {
      item.cantidad = 0;
      return;
    }
    if (item.cantidad > limit) {
      item.cantidad = limit;
      return;
    }
    props.state.carritoReducer.data[item.key] = item;
    props.dispatch({
      component: 'carrito',
      type: 'setState'
    });
  }
  static decrement({ key }, props) {
    var data = props.state.carritoReducer.data;
    var cantidad = 0;
    var item = data[key];
    if (!item) {
      return;
    }
    if (item) {
      item.cantidad -= 1;
    }

    if (item.cantidad <= 0) {
      delete props.state.carritoReducer.data[item.key];
    }
    props.dispatch({
      component: 'carrito',
      type: 'setState'
    });
  }

  //quitar todos los items del carrito
  static removeAll(props) {
    props.state.carritoReducer.data = {};
    props.dispatch({
      component: 'carrito',
      type: 'setState'
    });
  }
  //quitar un evento de los items del carrito
  static removeEvento(key_evento, props) {
    var data = props.state.carritoReducer.data;
    Object.keys(data).map((key, index) => {
      if (data[key].key_evento == key_evento) {
        delete data[key];
      }
    });
    props.dispatch({
      component: 'carrito',
      type: 'setState'
    });
  }
  //quitar un item de un evento del carrito
  static removeItem(key_item, props) {
    // var data = props.state.carritoReducer.data;
    delete props.state.carritoReducer.data[key_item];
    // delete data[key];

    props.dispatch({
      component: 'carrito',
      type: 'setState'
    });
  }
}
