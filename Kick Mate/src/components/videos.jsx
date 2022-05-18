const EMBED_KEY = 'MTg5MThfMTY1MjA5OTAxM19jMjI3M2I1NzI5NjRlOWE3ZDI0NGIzYjE0ZDhiOWUzNmVlMmE3NmI2'

export default function Videos({ chunk }) {  
  return (
    <div className = "well">
      {
        chunk.map((item, index) => {
          let array = item.videos[0].embed.split(" ")
          let url = array[2].split("'")
          let embed = url[1].split("=")[0] + "=" + EMBED_KEY + '&utm_source=api&utm_medium=video&utm_campaign=apifd' 

          return <iframe key = { index } src = { embed } frameBorder = "0" />
        })
      }
    </div>
  )
}