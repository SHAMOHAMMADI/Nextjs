import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
const style={
  display:"flex",
  color:"#0000ff",
  justifyContent:"center",
  height:"3em",
  border:"none",
  alignItems:'center',
  boxShadow:"5px 1px 25px 1px rgba(1,1,1,0.2)",
  margin:"10px 0",
  borderRadius:"10px"

}
  return (
  <>
  <div style={style}>Header</div>
  <Component {...pageProps} />
  <div style={style}>footer</div>
  </>
  )
  ;
}
