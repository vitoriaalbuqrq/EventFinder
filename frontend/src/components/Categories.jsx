import { Container, CardCategory, Icon, Text} from './Categories.style';
import { FaChalkboardTeacher, FaGlobe, FaBookOpen , FaUsers, FaEllipsisH} from "react-icons/fa";
import { BsFillMusicPlayerFill } from "react-icons/bs";

const Categories = () => {
  const categoryData = [
    { text: "Shows e Festivais", icon: BsFillMusicPlayerFill },
    { text: "Workshops", icon: FaChalkboardTeacher },
    { text: "Online", icon: FaGlobe },
    { text: "Educação", icon: FaBookOpen  },
    { text: "Social", icon: FaUsers },
    { text: "Outros", icon: FaEllipsisH }
  ];

  return (
    <Container>
      {categoryData.map((category, index) => (
        <CardCategory key={index}>
          {category.icon && <Icon as={category.icon} />} {/* Renderizar o ícone se existir */}
          <Text>{category.text}</Text>
        </CardCategory>
      ))}
    </Container>

    // <Container>
    //     <CardCategory>
    //         <Icon/>
    //         <Text>Shows e<br/>Festivais</Text>
    //     </CardCategory>
    //     <CardCategory>
    //         <Icon/>
    //         <Text>Workshops</Text>
    //     </CardCategory>
    //     <CardCategory>
    //         <Icon/>
    //         <Text>Online</Text>
    //     </CardCategory>
    //     <CardCategory>
    //         <Icon/>
    //         <Text>Educação</Text>
    //     </CardCategory>
    //     <CardCategory>
    //         <Icon/>
    //         <Text>Social</Text>
    //     </CardCategory>
    //     <CardCategory>
    //         <Text>Outros</Text>
    //     </CardCategory>
    // </Container>
  )
}

export default Categories