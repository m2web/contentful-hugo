import { ContentfulHugoConfig, ContentSettings } from '@/main';
import { ConfigContentfulSettings } from '@/main/src/config/src/types';
import getContentType from '@main/src/getContentType';
import {
    getRepeatableTypeConfigs,
    getSingleTypeConfigs,
} from './determineFileLocation';

const pullEntry = (
    contentType: string,
    config: ContentfulHugoConfig,
    previewMode = true
): Promise<{ totalItems: number; typeId: string }[]> => {
    const configs = getRepeatableTypeConfigs(config, contentType).concat(
        getSingleTypeConfigs(config, contentType)
    );
    const tasks = [];
    for (const cf of configs) {
        const contentSettings: ContentSettings = {
            typeId: cf.typeId,
            directory: cf.directory,
            fileExtension: cf.fileExtension,
            fileName: cf.fileName,
            titleField: cf.titleField,
            dateField: cf.dateField,
            isHeadless: cf.isHeadless,
            isTaxonomy: cf.isTaxonomy,
            isSingle: cf.isSingle,
            type: cf.type,
            resolveEntries: cf.resolveEntries,
            overrides: cf.overrides,
            mainContent: cf.mainContent,
        };
        const contentfulSettings: ConfigContentfulSettings = config.contentful;
        tasks.push(
            getContentType(
                1,
                0,
                contentSettings,
                contentfulSettings,
                previewMode,
                0,
                true
            )
        );
    }
    return Promise.all(tasks);
};

export default pullEntry;
