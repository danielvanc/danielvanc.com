// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// We import object and document schemas
import blockContent from './blockContent';
import titleContent from './titleContent';
import shortBlockContent from './shortBlockContent';
import category from './tags';
import templateKey from './templateKeys';
import contentType from './contentTypes';
import homePage from './HomePage';
import notes from './note';
import colophon from './colophon';
import now from './now';
import uses from './Uses';
import log from './Log';
import author from './author';
import about from './about';
import resume from './resume';
import employment from './employment';
import experience from './experience';
import personalSkills from './personal_skills';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
    // We name our schema
    name: 'default',
    // Then proceed to concatenate our our document type
    // to the ones provided by any plugins that are installed
    types: schemaTypes.concat([
        // The following are document types which will appear
        // in the studio.
        homePage,
        about,
        now,
        uses,
        notes,
        log,
        resume,
        colophon,
        author,
        category,
        templateKey,
        contentType,
        employment,
        experience,
        personalSkills,
        // When added to this list, object types can be used as
        // { type: 'typename' } in other document schemas
        blockContent,
        titleContent,
        shortBlockContent,
    ]),
});
