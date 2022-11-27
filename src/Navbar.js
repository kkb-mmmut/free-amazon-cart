import React from 'react';
const Navbar = (props) => { 
  console.log(props.total);
  return (
    <div style={styles.nav}>
        <div style={styles.favIconContainer}> 
        <img style={styles.favIcon} src="https://www.freepnglogos.com/uploads/amazon-png-logo-vector/large-images-amazon-png-logo-vector-7.png3ft3d1416935166817" alt="cart-icon" />
        </div>
      <div style={styles.cartIconContainer }>
        <h2 style={styles.cartTotalCount}>Total : {props.total}</h2>
        <img style={styles.cartIcon} src="https://cdn-icons-png.flaticon.com/512/925/925716.png" alt="cart-icon" />
        <span style={styles.cartCount}> {props.count} </span>
      </div>
    </div>
  );
}

const styles = { 
    
  nav: {
    height: 60,
    backgroundColor: '#0D4763',
    display:'inline'
  }, 
    favIconContainer:{
        height:60,
        width:'50%',
        position: 'relative',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems:'center',
        float:'left',
        background: '#0D4763'
    },
    favIcon: {
        height: 40,
        marginLeft:30
      }, 
  cartIconContainer: {  
    alignItems:'center',
    height:60,
    width:'50%',
    float:'right',  
    background: '#0D4763' ,
    display: 'flex',
    justifyContent: 'flex-end' 
  },
  cartIcon: { 
    height:30,
    marginRight: 30
  },
  cartCount: {
    background: 'yellow',
    borderRadius: '60%',
    padding: '2px 4px',
    position: 'absolute',
    right: 10,
    top:3       
  } ,
  cartTotalCount:{
    color:'#F18B32',
    marginRight:20
  }
};


export default Navbar;