// api
import settingsService from "shared/services/settings";

// utils
import { setUserSettings } from "shared/utils/settings";

export const saveSettings = async (user) => {
  try {
    const { data } = await settingsService.getOne(user);

    if (data !== null) {
      setUserSettings(data.settings);
    } else {
      const settings = await settingsService.post(user);

      setUserSettings(settings.data.settings);
    }
  } catch (error) {
    throw error;
  }
};
