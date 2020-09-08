
import axios from 'axios'

const KEY ='AIzaSyBtUGLDY_NYGbkEtNGnWdunu3qEFcfAbEQ';

export default axios.create({
baseURL:'https://www.googleapis.com/youtube/v3',
params:{
    part:'snippet',
    maxResults:5,
    key:KEY
}
});