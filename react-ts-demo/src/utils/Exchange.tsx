import React from "react";
//search
// interface Product {
//   id: number;
//   name: string;
//   time: string;
// }

// interface Props {
//   data: Product[];
//   fn: (data: Product[]) => void;
// }

// class DataInfo extends React.Component<Props> {
//   handleDelete = (id: number) => {
//     const newData = this.props.data.filter((item: any) => item.id !== id);
//     this.props.fn(newData);
//   };

//   render() {
//     const { data } = this.props;
//     return (
//       <>
//         <p style={{ textAlign: "center" }}>图书总数{data.length}</p>
//         <table style={{ width: "400px" }}>
//           <thead>
//             <tr>
//               <th>编号</th>
//               <th style={{ margin: "0 2.5vw" }}>名称</th>
//               <th style={{ margin: "0 10vw" }}>时间</th>
//               <th>操作</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((item: Product, index: number) => (
//               <tr key={index}>
//                 <td>{item.id}</td>
//                 <td>{item.name}</td>
//                 <td>{item.time}</td>
//                 <td>
//                   <button>修改</button>
//                   <button onClick={() => this.handleDelete(item.id)}>
//                     删除
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </>
//     );
//   }
// }

//search
// const SearchInfo = (props: any) => {
//   if (!props.data.length) return null;
//   const { data } = props;
//   const [searchName, setSearchName] = React.useState("");
//   const [searchId, setSearchId] = React.useState<number>(0);
//   const [searchData, setSearchData] = React.useState(data);

//   const handleNameSearch = (e: any) => {
//     setSearchName(e.target.value);
//   };

//   const handleIdSearch = (e: any) => {
//     setSearchId(e.target.value);
//   };

//   const handleSubmit = () => {
//     if (!searchName && !searchId) {
//       alert("输入不能为空");
//       return;
//     }
//     const isExist = data.some((item: any) => {
//       return item.id.toString() === searchId && item.name === searchName;
//     });
//     if (isExist) {
//       alert("该数据已存在");
//       return;
//     }
//     const time = new Date().toLocaleString();
//     const newData = [...searchData, { id: searchId, name: searchName, time }];
//     setSearchData(newData);
//   };

//   return (
//     <>
//       <input
//         type="text"
//         value={searchId}
//         onChange={handleIdSearch}
//         placeholder="输入编号"
//       />
//       <input
//         type="text"
//         value={searchName}
//         onChange={handleNameSearch}
//         placeholder="输入名称"
//       />
//       <input type="submit" onClick={handleSubmit} />
//       <DataInfo data={searchData} fn={setSearchData} />
//     </>
//   );
// };

//library主体
class Library extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      data: [],
    };
  }
  //获取数据
  async componentDidMount(): Promise<void> {
    await fetch("http://localhost:3000/lib")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          data: data.data,
        });
      });
  }
  render() {
    // const { data } = this.state;
    return (
      <>
        <div
          style={{
            width: "400px",
          }}
        >
          <h1>Library Manage</h1>
          {/* <SearchInfo data={data} /> */}
        </div>
      </>
    );
  }
}
export default Library;
