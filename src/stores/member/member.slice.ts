import { createSlice } from '@reduxjs/toolkit'
import { getMembers } from './member.action'
import { Member, MemberModel } from './member.type'
import members from 'variables/member'

const defaultMember: Member = {
    id: '',
    nama: '',
    usia: 0,
    statusPerkawinan: '',
    alamat: '',
    pekerjaan: '',
    ringkasanKehidupan: '',
    uploadFoto: '',
}

const initialState: MemberModel = {
    members: members,
    member: defaultMember,
    loading: false,
    error: '',
    status: '',
}

const memberSlice = createSlice({
    name: 'member',
    initialState,
    reducers: {
        addMember: (state, action) => {
            state.members.push(action.payload)
        },
        removeMember: (state, action) => {
            state.members = state.members.filter(
                (member) => member.id !== action.payload
            )
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getMembers.pending, (state) => {
            state.error = ''
            state.loading = true
        })
        builder.addCase(getMembers.fulfilled, (state, action) => {
            state.loading = false
            state.members = action.payload
        })
        builder.addCase(getMembers.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message || 'Something went wrong'
        })
    }
})

export const { addMember, removeMember } = memberSlice.actions

export default memberSlice.reducer