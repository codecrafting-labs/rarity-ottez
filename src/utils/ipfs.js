export default {

  transformUri (uri) {
    uri = uri.replace('ipfs://', 'https://ipfs.fleek.co/ipfs/');
    return uri;
  }

}