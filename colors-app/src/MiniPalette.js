import React from 'react';
import { withStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';

const styles = {
  root: {
    backgroundColor: 'white',
    border: '1px solid black',
    borderRadius: '5px',
    padding: '0.5rem',
    position: 'relative',
    overFlow: 'hidden',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  colors: {
    backgroundColor: '#dae1e4',
    height: '150px',
    width: '100%',
    borderRadius: '5px',
    overflow: 'hidden'
  },
  miniColor: {
    display: 'inline-block',
    margin: '0 auto',
    height: '25%',
    width: '20%',
    position: 'relative',
    marginBottom: '-3.5px'
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0',
    color: 'black',
    paddingTop: '0.5rem',
    position: 'relative',
    '& span': {
      marginLeft: '0.5rem',
      fontSize: '1.5rem'
    }
  }
}

function MiniPalette(props) {
  const { classes, paletteName, emoji, colors, id } = props;
  const miniColorBoxes = colors.map(color => (
    <div 
      className={classes.miniColor} 
      style={{ backgroundColor: color.color }}
      key={color.name}
    />
  ));

  return (
      <div className={classes.root} onClick={props.linkTo}>
        <div className={classes.colors}>
          { miniColorBoxes }
        </div>
        <h5 className={classes.title}>{paletteName} <span>{emoji}</span></h5>
      </div>
  )
}

export default withStyles(styles)(MiniPalette);