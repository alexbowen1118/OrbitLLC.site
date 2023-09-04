import HTTPClient from './HTTPClient';
const DEVICES_BASE = '/devices';

export default class DeviceService extends HTTPClient {
    static getAllDevices() {
        return DeviceService.get(`${DEVICES_BASE}`).then(response => response.devices);
    }

}