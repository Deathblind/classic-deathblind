import sortWith from "ramda/es/sortWith";
import { Post } from "./posts.interface";
import descend from "ramda/es/descend";
import ascend from "ramda/es/ascend";

export const sortPostsByDate = sortWith<Post>([
    descend(({ date }) => +new Date(date))
]);

export const sortPostsById = sortWith<Post>([ascend(({ id }) => id)]);

const idSortList = [
    1865, // introduction
    1866, // Wands at launch
    2020, // Priest Leveling Talents and Rotation
    991, // 1-6 Coldridge Valley
    996, // 6-10 Dun Morogh
    1003, // 10-12 Loch Modan
    1010, // 12-16 Darkshore
    1014, // 16-18 Darkshore
    1024, // 18-20 Loch Modan
    1035, // 20-21 Redridge/Duskwood
    1039, // 21-22 Redridge
    1042, // 22-23 Wetlands
    1045, // 23-26 Ashenvale
    1740, // Blackfathom deeps (23-24)
    1050, // 26-27 Redridge
    1053, // 27-28 Duskwood
    1057, // 28-29 Duskwood
    1789, // Stockade (28)
    1062, // 29-30 Wetlands
    1065, // 30-32 Hillsbrad
    1757, // Gnomeregan (30-31)
    1069, // 32-34 Shimmering Flats
    1076, // 34-34 Duskwood
    1081, // 34-36 Stranglethorn Vale
    1087, // 36-38 Desolace
    1091, // 38-38 Dustwallow Marsh
    1094, // 38-39 Alterac Mountains
    1098, // 39-40 Arathi Highlands
    1788, // Uldaman
    1103, // 40-41 Badlands
    1108, // 41-42 Stranglethorn Vale
    1112, // 42-43 Stranglethorn Vale
    1118, // 43-44 Swamp of Sorrows
    1123, // 44-45 Tanaris
    1767, // Zulfarak
    1130, // 45-46 Feralas
    1133, // 46-47 Tanaris
    1135, // 47-48 Hinterlands
    1157, // 48-49 Stranglethorn Vale & Blasted Lands
    1160, // 49-50 Searing Gorge
    1168, // 50-51 Felwood
    1170, // 51-52 Azshara
    1191, // 52-53 Un’Goro
    1193, // 53-54 Felwood
    1195, // 54-55 Feralas
    1228, // 55-56 Burning Steppes
    1231, // 56-57 Western Plaguelands
    1233, // 57-58 Eastern Plaguelands
    1235, // 58-59 Western/Eastern Plaguelands
    1240, // 59-60 Winterspring
    1242, // 59-60 Silithus (NO QUEST GIVERS ON LAUNCH)

    1357 // Blackrock Depths
];

export const sortPostsByIntended = sortWith<Post>([
    ascend(({ id }) => {
        const index = idSortList.indexOf(id);

        return index === -1 ? id : index;
    })
]);
