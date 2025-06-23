import imageForTechnology from '../src/shared/assets/images/dataImg/Toyota-Land-Cruiser-200-на-джип-сафари-в-пустыне-Дубай-Шарджа.jpg'
import imageForExpansion from '../src/shared/assets/images/dataImg/safari-1.jpg'
import imageForSustainability from '../src/shared/assets/images/dataImg/sportivnaya-mashina-v-pustyne-edet-po-pesku.jpg'
import avatarForTechnology from '../src/shared/assets/images/avatar/2018-11-1_219203-2.jpg'
import avatarForExpansion from '../src/shared/assets/images/avatar/users.jpg'
import avatarForSustainability from '../src/shared/assets/images/avatar/users1.jpg'


type Data = {
  id: number,
  imageCard: string,
  category: string;
  title: string;
  text: string;
  avatar: string,
  name: string,
  date: string
};
export const data: Data[] = [
  {
    id: 1,
    imageCard: imageForTechnology,
    category: 'Technology',
    title: 'Revolutionizing Our Production Process',
    text: 'Learn how our recent investment in new technology has revolutionized our production process, leading to improved efficiency and product quality.',
    avatar: avatarForTechnology,
    name: 'John Doe',
    date: '2022-08-15'

  },
  {
    id: 2,
    imageCard: imageForExpansion,
    category: 'Expansion',
    title: 'Expanding Our Service Network',
    text: 'Discover how our expansion investment has allowed us to enhance our service network, providing better support and customer experience.',
    avatar: avatarForExpansion,
    name: 'Jane Smith',
    date: '2022-09-02'
  },
  {
    id: 3,
    imageCard: imageForSustainability,
    category: 'Sustainability',
    title: 'Sustainable Practices for a Greener Future',
    text: 'Find out how our investment in sustainable practices is driving us towards a greener future, showcasing our commitment to environmental responsibility. ',
    avatar: avatarForSustainability,
    name: 'Alex Johnson',
    date: '2022-09-20'
  },
];
