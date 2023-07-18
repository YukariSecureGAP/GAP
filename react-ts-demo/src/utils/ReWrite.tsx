import { useState, useEffect } from "react";

interface AddFormProps {
  value: string;
  onNameChange: (e: any) => void;
  onSubmit: () => void;
}

  interface EditFormProps {
    show: boolean;
    onCancle: () => void;
    editItems: { id: number; name: string };
    onSubmit: () => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }

  function AddForm({ value, onNameChange, onSubmit }: AddFormProps) {
    return (
      <tr className="tr-bg">
        <td >
          <label>
            编号：
            <input type="text" />
          </label>
          <label>
            名称：
            <input type="text" value={value} onChange={onNameChange} />
          </label>
          <input type="submit" onClick={onSubmit} />
        </td>
      </tr>
    );
  }

  function EditForm({
    show,
    onCancle,
    editItems,
    onSubmit,
    onChange,
  }: EditFormProps) {
    if (!show) {
      return null;
    }
    const { id, name } = editItems;
    console.log(id, name);
    return (
      <table className="edit-form">
        <tbody>
          <tr>
            <td>编号：</td>
            <td>
              <input type="text" disabled value={id} />
            </td>
          </tr>
          <tr>
            <td>名称：</td>
            <td>
              <input type="text" value={name} onChange={onChange} />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <input type="button" value="提交" onClick={onSubmit} />
              <input type="button" value="取消" onClick={onCancle} />
            </td>
          </tr>
        </tbody>
      </table>
    );
  }

  const LibManage = () => {
    const [list, setList] = useState<{ id: number; name: string; time: string }[] | null>(null);
    const [curName, setCurName] = useState("");
    const [showEdit, setShowEdit] = useState(false);
    const [editName, setEditName] = useState<{ id: number; name: string }>({ id: 0, name: "" });

    useEffect(() => {
      (async () => {
        const res = await fetch("http://localhost:3000/lib", {
          method: "GET",
        });
        const data = await res.json();
        if (list === null) {
          setList(data.data);
        }
      })();
    }, [list]);

    //检测是否重名
    const checkName = (data: { id: number; name: string; time: string }[], name: string): boolean => {
      const index = data.findIndex((item: any) => item.name === name);
      if (index === -1) {
        return false;
      } else {
        return true;
      }
    };

    // 修改书名时触发
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
      const curName = e.target.value.trim();
      setCurName(curName);
    };
    // 点击修改时触发
    const handleConfirm = (): void => {
      if (list === null) return;
      if (checkName(list, curName)) {
        alert("图书已存在");
        return;
      }
      list.push({
        id: list.length === 0 ? 1 : list[list.length - 1].id + 1,
        name: curName,
        time: new Date().toLocaleString(),
      });
      setList([...list]);
    };
    // 点击修改时触发
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
      if (list === null) return;
      const val = e.target.value.trim();
      setEditName({ ...editName, name: val });
    };
    //   删除时触发
    const handleDelete = (e: React.MouseEvent<HTMLAnchorElement>): void => {
      if (!list) return;
      // const id = parseInt(e.currentTarget.parentNode?.id || "");
      // const index = list.findIndex((item: any) => item.id === id);
      console.log(list,e);
      // list.splice(index, 1);
      setList([...list]);
    };
    //   取消
    const handleCanle = (): void => {
      setShowEdit(false);
    };
    //   编辑
    const handleEdit = (e: React.MouseEvent<HTMLAnchorElement>): void => {
      if (list === null) return;
      e.preventDefault();
      // const id = parseInt(e.currentTarget.parentNode?.id || "");
      // const index = list.findIndex((item: any) => item.id === id);
      // console.log(list.map((item: any) => item.id));
      // setEditName({ id: list[index].id, name: list[index].name });
      setShowEdit(true);
    };
    //   修改中的确认修改
    const handleSubmit = (): void => {
      if (list === null) return;
      const index = list.findIndex((item: any) => item.id === editName.id);
      if (editName.name === list[index].name) {
        list[index].name = editName.name;
        list[index].time = new Date().toLocaleString();
        setList([...list]);
        setShowEdit(false);
      } else {
        if (checkName(list, editName.name)) {
          alert("图书已存在");
          return;
        } else {
          list[index].name = editName.name;
          list[index].time = new Date().toLocaleString();
          setList([...list]);
          setShowEdit(false);
        }
      }
    };
    return (
      <>
        {
          <table className="list">
            <caption>图书管理</caption>
            <tbody>
              <AddForm
                value={curName}
                onNameChange={handleNameChange}
                onSubmit={handleConfirm}
              />
              <tr className="tr-bg">
                <td >
                  图书总数：<span>{list != null ? list.length : ""}</span>
                </td>
              </tr>
              <tr className="tr-bg">
                <th>编号</th>
                <th>名称</th>
                <th>时间</th>
                <th>操作</th>
              </tr>
              {list != null
                ? list.length > 0 &&
                  list.map((item: { id: number; name: string; time: string }) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.time}</td>
                      <td id={item.id.toString()}>
                        <a href="" onClick={handleEdit}>
                          修改
                        </a>{" "}
                        |
                        <a href="" onClick={handleDelete}>
                          删除
                        </a>
                      </td>
                    </tr>
                  ))
                : ""}
            </tbody>
          </table>
        }
        <EditForm
          show={showEdit}
          onCancle={handleCanle}
          editItems={editName}
          onSubmit={handleSubmit}
          onChange={handleOnChange}
        />
      </>
    );
  };

  export { LibManage };
