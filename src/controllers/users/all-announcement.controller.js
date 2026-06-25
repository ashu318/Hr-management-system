import { getAllAnnouncementService } from "@/services/users/all-announcement.service";

export async function getAllAnnouncementController(currentUser) {
    const announcements = await getAllAnnouncementService(currentUser);

    return {
        success: true,
        message: "Announcements fetched successfully",
        data: announcements,
    };
    
}