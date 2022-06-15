// DRAWING ITEM COMPONENT:
import Button from "@mui/material/Button";
// react router
// import {useParams, useNavigate} from 'react-router-dom';
// import {useEffect} from 'react';
//----------------------------------------------
// -many drawingItem components are rendered in the DropDownMenu component

export default function DrawingItem(props) {
  // const params = useParams();
  // console.log(params);
  
  // useEffect(() => {
  //   axios.get(`/api/products/${params.id}`)
  //     .then(res => setProduct(res.data));
  // }, [params.id]);


  function renderDrawingPoints() {
    return props.setLatLong(props.points);
  }

  return (
    <Button onClick={renderDrawingPoints} size="small">
      {props.name}
    </Button>
  );
}

