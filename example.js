var React = require('react');
var ReactDOM = require('react-dom');

var Raven = require('raven-js') ;
Raven
    .config('https://5fdcb3aeb7f446a1aaac367d932a48bd@sentry.io/100653')
    .install();

var exposedNullCheck = require('./exposed-null-check');
exposedNullCheck(Raven,{DEBUG:false});


var Hello = React.createClass({
  getInitialState:function(){
    setTimeout(()=>this.setState({foo:undefined/7}), 1000)
    return {};

  },
  render: function() {
    return(
      <div>
      Hello2 {this.state.foo}
      {this.state.foo > 0.8 && <Hello/>}
    </div>);

  }
});

ReactDOM.render(
  <Hello name="World" />,
  document.getElementById('container')
);

// console.log(ReactDOM)
// console.log(React)


// var target = document;
//
// // create an observer instance
// var observer = new MutationObserver(function(mutations) {
//   console.log(mutations);
// });
//
// // configuration of the observer:
// var config = { attributes: true, childList: true, characterData: true };
//
// // pass in the target node, as well as the observer options
// observer.observe(target, config);

// later, you can stop observing
// observer.disconnect();

//
// var insertedNodes = [];
// var observer = new MutationObserver((mutations) => {
//   console.log("mutations:")
//   console.log(mutations)
//  // mutations.forEach((mutation) => {
//   //  for (var i = 0; i < mutation.addedNodes.length; i++)
//     //  insertedNodes.push(mutation.addedNodes[i]);
//  // })
// });
// observer.observe(document, { childList: true, attributes:true });
// // console.log(insertedNodes);
