/*
 * @discripe: 添加学生信息
 */

import { useEffect, useState } from "react";
import { datas } from "../datas/datas";
import "../style/new.css";
interface IStudentData extends datas.Idata, datas.Iscore {}
interface IAddInfoProps extends datas.Iscore {
  onFormSubmit: (formData: IStudentData) => void;
  studentList: IStudentData[];
}

const AddInfo: React.FC<IAddInfoProps> = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState<IStudentData>({
    student_name: "",
    student_age: "",
    student_class: "",
    Math_score: 0,
    English_score: 0,
    Chinese_score: 0,
  });
  const [score, setScore] = useState<datas.Iscore>({
    Chinese_score: "" || 0,
    Math_score: "" || 0,
    English_score: "" || 0,
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    if(value < 0 || value > 100) return false;
    setFormData({
      ...formData,
      [name]: value,
    });
    setScore({
      ...score,
      [name]: value,
    });
  };

  useEffect(() => {
    //只计算平均分
    if (
      !formData.Chinese_score ||
      !formData.Math_score ||
      !formData.English_score
    )
      return;
    setFormData({
      ...formData,
    });
  }, [formData.Chinese_score]);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    //将数据传递给StudentForm.tsx
    // data is ok!

    if (!formData) {
      return false;
    }
    
    onFormSubmit(formData);
    // 重置表单数据
    setFormData({
      student_name: "",
      student_age: "",
      student_class: "",
      Math_score: 0,
      English_score: 0,
      Chinese_score: 0,
     
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <table className="whoami">
          <tbody>
            <tr>
              <td>姓名</td>
              <td>
                <input
                  type="text"
                  name="student_name"
                  value={formData.student_name}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr>
              <td>年龄</td>
              <td>
                <input
                  type="text"
                  name="student_age"
                  value={formData.student_age}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr>
              <td>班级</td>
              <td>
                <input
                  type="text"
                  name="student_class"
                  value={formData.student_class}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr>
              <td>语文</td>
              <td>
                <input
                  type="text"
                  name="Chinese_score"
                  value={score.Chinese_score}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr>
              <td>数学</td>
              <td>
                <input
                  type="text"
                  name="Math_score"
                  value={score.Math_score}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr>
              <td>英语</td>
              <td>
                <input
                  type="text"
                  name="English_score"
                  value={score.English_score}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <input
                  type="submit"
                  onClick={() => {}}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </>
  );
};

export default AddInfo;
