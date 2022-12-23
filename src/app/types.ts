export interface Game {
    _id: string;
    userId: string;
    name: string;
    category: string;
    thumb: string;
    imgList: Array<string>;
    authorName: string;
    description: string;
}

export interface Comment{
    _id: string;
    userId: string;
    gameId: string;
    content: string;
    date: string;
    authorName: string;
}

export interface User {
    _id: string;
    name: string;
    avatar?: string;
    username: string;
}

export interface Login {
    username: string;
    password: string;
}

export interface Register {
    username: string;
    password: string;

}

export interface Response {
    success: boolean;
    message: string;
    data: any
}