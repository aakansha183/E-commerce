export const styles: { [key: string]: React.CSSProperties } = {
    container: {
      width: '1000px',
      height: '700px',
      backgroundColor: '#F5F5F5',
      borderRadius: '20px',
      padding: '10px 40px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginLeft:'300px',
      marginBottom:'100px'
    },
    header: {
      marginBottom: '30px',
    },
    gridItem: {
      position: 'relative',
      borderRadius: '15px',
      overflow: 'hidden',
      cursor: 'pointer',
      transition: 'transform 0.3s ease',
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover' as 'cover',
    },
    label: {
      position: 'absolute',
      top: '10px',
      left: '10px',
      color: '#000',
      fontWeight: 'bold',
      fontSize: '20px',
    },
  };