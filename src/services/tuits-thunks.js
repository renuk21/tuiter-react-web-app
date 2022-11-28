import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service
    from "./tuits-service"

export const findTuitsThunk = createAsyncThunk(
    'tuits/findTuits', async () =>
        await service.findTuits()
)
export const deleteTuitThunk = createAsyncThunk(
    'tuits/deleteTuit',
    async (tuitId) => {
        await service.deleteTuit(tuitId)
        return tuitId
    })
const date = new Date();
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
export const createTuitThunk = createAsyncThunk(
    'tuits/createTuit',
    async (tuit) => {
        tuit.image = "../../images/nasa.jpg";
        tuit.dislikes = 0;
        tuit.likes = 0;
        tuit.username = "NASA";
        tuit.handle = "@nasa";
        tuit.time = date.getDate().toString() +" "+ monthNames[date.getMonth()] +" "+ date.getFullYear().toString();
        await service.createTuit(tuit);
        return tuit;
    })
export const updateTuitThunk = createAsyncThunk(
        'tuits/updateTuit',
        async (tuit) =>
            await service.updateTuit(tuit)
    )

