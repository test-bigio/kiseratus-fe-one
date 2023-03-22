export interface Member {
  id: string;
  nama: string;
  usia: number;
  statusPerkawinan: string;
  alamat: string;
  pekerjaan: string;
  ringkasanKehidupan: string;
  uploadFoto: string;
}

export interface MemberModel {
    members: Member[];
    member: Member;
    loading: boolean;
    error: string;
    status: string;
}