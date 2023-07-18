/*
 * @disc: 学生信息表单
 */
import { useState, useEffect, useCallback } from "react";
import { datas } from "../datas/datas";
import AddInfo from "./AddInfo";
import InputNumber from "./InputBox";
// main function
import "../style/new.css";
interface IStudentData extends datas.Idata, datas.Iscore {}
const StudentForm = () => {
  const [stuInfo, setStuInfo] = useState<datas.Idata>({
    student_name: "",
    student_age: "" || 0,
    student_class: "",
  });
  const [score, setScore] = useState<datas.Iscore>({
    Chinese_score: 0,
    Math_score: 0,
    English_score: 0,
    Total_score: 0,
    Total_average: 0,
    Chinese_average: 0,
    Math_average: 0,
    English_average: 0,
  });
  const [studentList, setStudentList] = useState<IStudentData[]>([]);
  const [formData, setFormData] = useState<IStudentData>({
    student_name: "",
    student_age: "",
    student_class: "",
    Math_score: 0,
    English_score: 0,
    Chinese_score: 0,
  });

  //静态数据
  const statiData: IStudentData[] = [
    {
      student_name: "我",
      student_age: 18,
      student_class: "一班",
      Chinese_score: 100,
      Math_score: 100,
      English_score: 100,
    },
    {
      student_name: "你",
      student_age: 18,
      student_class: "一班",
      Chinese_score: 10,
      Math_score: 10,
      English_score: 10,
    },
  ];
  useEffect(() => {
    calcScore(statiData);
    setStudentList([...statiData]);
    // 数据获取后，计算总分、平均分、各科平均分
    // 判断是否有数据，有的话
    if (studentList.length > 0) {
      // 有数据，计算总分、平均分、各科平均分
      calcScore(studentList);
      setStudentList([...studentList]);
    }
  }, []);
  //计算总分、平均分、各科平均分
  const calcScore = (data: any) => {
    if (!data) return;
    // 获取Chinese_score、Math_score、English_score
    const scores = data.map((item: datas.Iscore) => {
      return {
        Chinese_score: Number(item.Chinese_score),
        Math_score: Number(item.Math_score),
        English_score: Number(item.English_score),
      };
    });
    // 总分
    const Total_score = scores.map((item: any) => {
      return item.Chinese_score + item.Math_score + item.English_score;
    });
    // 总分平均分
    const Total_average =
      Total_score.reduce((prev: any, cur: any) => {
        return prev + cur;
      }) / Total_score.length;
    // 语数英平均分各科的平均分

    //语文平均分
    const Chinese_average =
      scores.reduce((prev: any, cur: any) => {
        return prev + cur.Chinese_score;
      }, 0) / scores.length;
    //数学平均分
    const Math_average =
      scores.reduce((prev: any, cur: any) => {
        return prev + cur.Math_score;
      }, 0) / scores.length;
    //英语平均分
    const English_average =
      scores.reduce((prev: any, cur: any) => {
        return prev + cur.English_score;
      }, 0) / scores.length;
    // 将计算后的数据保存到score中
    setScore({
      ...score,
      Total_score,
      Total_average,
      Chinese_average,
      Math_average,
      English_average,
    });
  };
  useEffect(() => {
    //防止无限循环，当数据发生变化时，执行
    if (score.Chinese_score && score.Math_score && score.English_score) {
      calcScore(studentList);
      setStudentList([...studentList]);
    }
  }, [score.Chinese_score, score.Math_score, score.English_score]);

  const handleFormSubmit = (formData: IStudentData) => {
    // calcScore(formData);
    setFormData(formData);
    //保存上一个状态的数据prevStudentList
    setStudentList((prevStudentList) => [
      ...prevStudentList,
      { ...formData },
      // { ...formData },
    ]);
  };

  // 当formdata中的数据发生变化时，执行
  useEffect(() => {
    //  防止无限循环，只有当formData中的数据发生变化时才会执行
    if (
      formData.student_name &&
      formData.student_age &&
      formData.student_class
    ) {
      setStuInfo({ ...stuInfo, formData } as datas.Idata);
      setScore({ ...score, ...formData } as datas.Iscore);
    }
  }, [formData]);

  const handleSub = (e: any) => {
    e.preventDefault();
    const index = e.target.parentNode.parentNode.parentNode.id;
    // 小于0时，不执行
    // 获取到input的name属性
    setScore({ ...score });
    // 修改的应该是studentList中的数据
    studentList[index].Chinese_score--;
    calcScore(studentList);
    setStudentList([...studentList]);
  };
  //删除数据
  const handleDelete = (index: number) => {
    if (studentList.length === 1) return alert("至少保留一条数据");
    studentList.splice(index, 1);
    calcScore(studentList);
    setStudentList([...studentList]);
  };

  const handleInputChange = (e: any) => {
    e.stopPropagation();
    const { name, value } = e.target;
    value.replace(/[^\d]/g, "");
    if (value > 100 || value < 0) {
      e.target.value = value > 100 ? 100 : 0;
    }
    //  判断是语文还是数学还是英语
    switch (name) {
      case "Chinese_score":
        // 修改的应该是studentList中的数据
        studentList[e.target.parentNode.parentNode.id].Chinese_score = value;
        // 数值不可以超过100小于0
        if (value > 100 || value < 0) return;
        calcScore(studentList);
        setStudentList([...studentList]);
        break;
      case "Math_score":
        studentList[e.target.parentNode.parentNode.id].Math_score = value;
        if (value > 100 || value < 0) return;
        calcScore(studentList);
        setStudentList([...studentList]);
        break;
      case "English_score":
        studentList[e.target.parentNode.parentNode.id].English_score = value;
        if (value > 100 || value < 0) return;
        calcScore(studentList);
        setStudentList([...studentList]);
        break;
      default:
        break;
    }
  };
  //个人品均分
  const Single_average = useCallback((...args: number[]) => {
    const avg = args.reduce((prev: number, cur: number) => prev + cur, 0);
    return Math.floor(avg / args.length);
  }, []);
  //单选框选中时

  const hanldeChecked = useCallback(
    (e: any) => {
      const { checked } = e.target;
      const _stdList = [...studentList];
      _stdList.forEach((item: any, index: number) => {
        if (checked) {
          item.isSelect = true;
          setFormData({ ..._stdList[index] });
        } else {
          item.isSelect = false;
          setFormData({
            student_name: "",
            student_age: "",
            student_class: "",
            Chinese_score: 0,
            Math_score: 0,
            English_score: 0,
          });
        }
      });
      setStudentList([..._stdList]);
    },
    [studentList]
  );

  return (
    <>
      <div>
        <table style={{ border: "1px solid black", padding: "10px" }}>
          <thead>
            <tr>
              <th>{""}</th>
              <th>姓名</th>
              <th>年龄</th>
              <th>班级</th>
              <th>语文</th>
              <th>数学</th>
              <th>英语</th>
              <th>个人平均</th>
              <th>擦做</th>
            </tr>
          </thead>
          <tbody>
            {studentList.map((student, index) => (
              <tr key={index} id={index.toString()}>
                <td>
                  <input
                    type="checkbox"
                    name="selectedStudent"
                    
                    onChange={hanldeChecked}
                  />
                </td>
                <td>{student.student_name}</td>
                <td>{student.student_age}</td>
                <td>{student.student_class}</td>
                <td>
                  <input
                    type="text"
                    name="Chinese_score"
                    value={student.Chinese_score}
                    onChange={handleInputChange}
                  />
                  <label onClick={handleSub}>
                    <button>-</button>
                    <button>+</button>
                  </label>
                </td>
                <td>
                  <button>-</button>
                  <input
                    type="text"
                    name="Math_score"
                    value={student.Math_score}
                    onChange={handleInputChange}
                  />
                  <button>+</button>
                </td>
                <td>
                  <button>-</button>
                  <input
                    type="text"
                    name="English_score"
                    value={student.English_score}
                    onChange={handleInputChange}
                  />
                  <button>+</button>
                </td>
                <td>
                  {Single_average(
                    student.Chinese_score * 1,
                    student.Math_score * 1,
                    student.English_score * 1
                  )}
                </td>
                <td>
                  <button
                    onClick={() => {
                      handleDelete(index);
                    }}
                  >
                    del
                  </button>
                </td>
              </tr>
            ))}
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>科目平均分</td>
              <td>{score.Chinese_average}</td>
              <td>{score.Math_average}</td>
              <td>{score.English_average}</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>总平均分</td>
              <td>{Math.floor(score.Total_average || 0)}</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <AddInfo
        onFormSubmit={handleFormSubmit}
        Chinese_score={0}
        Math_score={0}
        English_score={0}
        studentList={studentList}
      />
      <InputNumber />
    </>
  );
};

export { StudentForm };
