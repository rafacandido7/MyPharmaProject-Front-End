
import React,{useState,useEffect}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import MenuAdmin from '../../../components/menu_admin';
import Footer from '../../../components/footer_admin';

import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SaveIcon from '@material-ui/icons/Save';
import api from '../../../services/api';

import { useParams } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {display: 'flex',},
  title: {flexGrow: 1,},
  appBarSpacer: theme.mixins.toolbar,
  content: {flexGrow: 1,height: '100vh',overflow: 'auto',},
  container: {paddingTop: theme.spacing(2),paddingBottom: theme.spacing(4),},
  paper: {padding: 35,display: 'flex',overflow: 'auto',flexDirection: 'column',},
  formControl:{width:'100%'},
  btnSuccess:{ backgroundColor:"green",color:"#fff","&:hover":{backgroundColor:"#12b912"}}
}));

export default function ProductRegistration() {
  const classes = useStyles();

  const [bar_code , setBar_Code] = useState('');
  const [name , setName] = useState('');
  const [price , setPrice] = useState('');
  const [quantity , setQuantity] = useState('');
  const [description , setDescription] = useState('');

  const { idProduct } = useParams();

  useEffect(() => {
    async function getProduct() {
      var response = await api.get('/api/product_details/'+idProduct);
    
      setBar_Code(response.data.product.bar_code);
      setName(response.data.product.name);
      setPrice(response.data.product.price);
      setQuantity(response.data.product.quantity);
      setDescription(response.data.product.description);
      console.log(response.data);
    }

    getProduct();
  },[])

  async function handleSubmit(){

    const data = {
      bar_code:bar_code,
      name:name, 
      price:price,
      quantity:quantity,
      description:description,
      _id:idProduct,
    }

      if(bar_code!==''&&name!==''&&price!==''&&quantity!==''&&description!==''){
        const response = await api.patch('/api/update_product/'+idProduct, data);

        if(response.status===200){
          window.location.href='/products'
        }else{
          alert('Erro ao atualizar o produto!');
        }
      }else{
        alert('Por favor, preencha todos os dados!');
      }
  }
  
  return (
    <div className={classes.root}>
      
      <MenuAdmin title={'Produtos'}/>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item sm={12}>
              <Button style={{marginBottom:10}} variant="contained" href={'/products'} ><ArrowBackIcon />  Voltar</Button>
              <Paper className={classes.paper}>
                <h2>Produto</h2>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      required
                      id="bar_code"
                      name="bar_code"
                      label="Código de Barras"
                      fullWidth
                      autoComplete="bar_code"
                      value={bar_code}
                      onChange={e => setBar_Code(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      required
                      id="name"
                      name="name"
                      label="Nome do Produto"
                      fullWidth
                      autoComplete="name"
                      value={name}
                      onChange={e => setName(e.target.value)}
                    />
                  </Grid>
                
                  <Grid item xs={12} sm={12}>
                  <TextField
                      type="price"
                      required
                      id="price"
                      name="price"
                      label="Preço do Produto"
                      fullWidth
                      autoComplete="price"
                      value={price}
                      onChange={e => setPrice(e.target.value)}
                    />
                  </Grid>

                  <Grid item xs={12} sm={12}>
                    <TextField
                      type="quantity"
                      required
                      id="quantity"
                      name="quantity"
                      label="Quantidade disponivel do Produto"
                      fullWidth
                      autoComplete="quantity"
                      value={quantity}
                      onChange={e => setQuantity(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      type="description"
                      required
                      id="description"
                      name="description"
                      label="Descrição do Produto"
                      fullWidth
                      autoComplete="description"
                      value={description}
                      onChange={e => setDescription(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                  <Button variant="contained" onClick={handleSubmit} className={classes.btnSuccess}>
                  <SaveIcon />  Atualizar Produto
                  </Button>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            
          </Grid>
          <Box pt={4}>
            <Footer />
          </Box>
        </Container>
      </main>
    </div>
  );
}