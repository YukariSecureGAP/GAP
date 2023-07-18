import React from "react";
class GetRequest extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      data: [],
      firstId: 0,
      secId: 0,
    };
  }
  //use fetch to get data from server
  componentDidMount() {
    (async () => {
      const res: any = await new Promise((res, rej) => {
        const xml = new XMLHttpRequest();
        xml.open("GET", "https://bennysz.gitee.io/api/getElectrical.json");
        xml.send();
        xml.onreadystatechange = () => {
          if (xml.readyState === 4 && xml.status === 200) {
            res(xml.responseText);
          }else{
            rej(xml.responseText)
          }
        };
      });
      this.setState({
        data: res.Categories,
      });
    })();
  }

  fClick = (e: any) => {
    e.preventDefault();
    const fID = e.target.id;
    this.setState({
      fID
    })
  };
  sClick = (e:any) =>{
    e.preventDefalut();
    // const sId = e.target.value
  }
  render() {
    const { data }: any = this.state;
    return (
      <div>
        {data.map((item: any) => (
          <a key={item.id} id={item.id}>
            {item.name}
          </a>
        ))}
      </div>
    );
  }
}
export default GetRequest;
