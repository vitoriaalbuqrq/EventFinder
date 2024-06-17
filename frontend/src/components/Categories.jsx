import { Container, CardCategory, Icon, Text} from './Categories.style';
import { FaChalkboardTeacher, FaGlobe, FaBookOpen , FaUsers, FaEllipsisH} from "react-icons/fa";
import { BsFillMusicPlayerFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

const Categories = () => {
  const navigate = useNavigate();

  const categoryData = [
    { text: "Shows e Festivais", icon: BsFillMusicPlayerFill },
    { text: "Workshops", icon: FaChalkboardTeacher },
    { text: "Online", icon: FaGlobe },
    { text: "Educação", icon: FaBookOpen  },
    { text: "Social", icon: FaUsers },
    { text: "Outros", icon: FaEllipsisH }
  ];

  const handleCategoryClick = (category) => {
    navigate(`/events/${category}`)
  }

  return (
    <Container>
      {categoryData.map((category, index) => (
        <CardCategory key={index} onClick={() => handleCategoryClick(category.text)}>
          {category.icon && <Icon as={category.icon} />} 
          <Text>{category.text}</Text>
        </CardCategory>
      ))}
    </Container>
  )
}

export default Categories