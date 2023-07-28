import type { MenuProps } from "antd";
import { Button, Dropdown } from "antd";
import "@/assets/Style/Nav/nav.less";

const Navgation = ({ isShow }: { isShow: boolean }) => {
  // when mouse move to the top of the page, show the nav bar
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item
        </a>
      ),
    },
  ];

  return (
    <>
      {isShow ? (
        <div className="nav">
          <Dropdown
            menu={{ items }}
            placement="bottomLeft"
            arrow={{ pointAtCenter: true }}
          >
            <Button>首页</Button>
          </Dropdown>
          <Dropdown
            menu={{ items }}
            placement="bottom"
            arrow={{ pointAtCenter: true }}
          >
            <Button>介绍</Button>
          </Dropdown>
          <Dropdown
            menu={{ items }}
            placement="bottom"
            arrow={{ pointAtCenter: true }}
          >
            <Button>巴拉巴拉</Button>
          </Dropdown>
          <Dropdown
            menu={{ items }}
            placement="bottom"
            arrow={{ pointAtCenter: true }}
          >
            <Button>吐槽</Button>
          </Dropdown>
          <Dropdown
            menu={{ items }}
            placement="bottomRight"
            arrow={{ pointAtCenter: true }}
          >
            <Button>关于</Button>
          </Dropdown>
          <br />
        </div>
      ) : null}
    </>
  );
};
export default Navgation;
