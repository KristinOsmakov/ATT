import imageForTechnologyWebp from '../../../shared/assets/images/dataImg/webp/Toyota-Land-Cruiser-200.webp'
import imageForExpansionWebp from '../../../shared/assets/images/dataImg/webp/safari-1.webp'
import imageForSustainabilityWebp from '../../../shared/assets/images/dataImg/webp/sportivnaya-mashina-v-pustyne-edet-po-pesku.webp'

import imageForTechnology from '../../../shared/assets/images/dataImg/jpeg/Toyota-Land-Cruiser-200.jpeg'
import imageForExpansion from '../../../shared/assets/images/dataImg/jpeg/safari-1.jpeg'
import imageForSustainability from '../../../shared/assets/images/dataImg/jpeg/sportivnaya-mashina-v-pustyne-edet-po-pesku.jpeg'


import avatarForTechnologyWebp from '../../../shared/assets/images/avatar/webp/2018-11-1_219203-2.webp'
import avatarForExpansionWebp from '../../../shared/assets/images/avatar/webp/users.webp'
import avatarForSustainabilityWebp from '../../../shared/assets/images/avatar/webp/users1.webp'

import avatarForTechnology from '../../../shared/assets/images/avatar/jpeg/2018-11-1_219203-2.jpeg'
import avatarForExpansion from '../../../shared/assets/images/avatar/jpeg/users.jpeg'
import avatarForSustainability from '../../../shared/assets/images/avatar/jpeg/users1.jpeg'


type Data = {
  id: number,
  imageCard: string,
  imageCardWebp: string,
  category: string;
  title: string;
  text: string;
  avatar: string,
  avatarWebp: string,
  name: string,
  date: string
};
export const data: Data[] = [
  {
    id: 1,
    imageCard: imageForTechnology,
    imageCardWebp: imageForTechnologyWebp,
    category: 'Technology',
    title: 'Revolutionizing Our Production Process',
    text: 'Learn how our recent investment in new technology has revolutionized our production process, leading to improved efficiency and product quality.',
    avatar: avatarForTechnology,
    avatarWebp: avatarForTechnologyWebp,
    name: 'John Doe',
    date: '2022-08-15'

  },
  {
    id: 2,
    imageCard: imageForExpansion,
    imageCardWebp: imageForExpansionWebp,
    category: 'Expansion',
    title: 'Expanding Our Service Network',
    text: 'Discover how our expansion investment has allowed us to enhance our service network, providing better support and customer experience.',
    avatar: avatarForExpansion,
    avatarWebp: avatarForExpansionWebp,
    name: 'Jane Smith',
    date: '2022-09-02'
  },
  {
    id: 3,
    imageCard: imageForSustainability,
    imageCardWebp: imageForSustainabilityWebp,
    category: 'Sustainability',
    title: 'Sustainable Practices for a Greener Future',
    text: 'Find out how our investment in sustainable practices is driving us towards a greener future, showcasing our commitment to environmental responsibility. ',
    avatar: avatarForSustainability,
    avatarWebp: avatarForSustainabilityWebp,
    name: 'Alex Johnson',
    date: '2022-09-20'
  },
];
